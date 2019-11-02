'use strict';

import React, { Component } from "react";
import PropTypes from "prop-types";

import {
    View,
    Animated,
    Platform,
    ViewPropTypes
} from "react-native";

import S from './styles'

export default class FlipCard extends Component {
    static propTypes = {
        style: ViewPropTypes.style
    };

    constructor (props) {
        super(props);

        const isFlipped = (this.props.alignHeight || this.props.alignWidth) ? !props.flip : props.flip;

        this.state = {
            isFlipped: isFlipped,
            isFlipping: false,
            rotate: new Animated.Value(Number(props.flip)),
            mesured: false,
            height: 0,
            width: 0,
            face: { width: 0, height: 0 },
            back: { width: 0, height: 0 },
            flag:this.props.flag
        }
    }
    componentWillReceiveProps (nextProps) {
        if (this.state.isFlipped !== nextProps.flip) {
            this._toggleCard()
        }
        if(this.state.flag!==nextProps.flag){
            this._toggleCard()
        }
    }
    _toggleCard () {
        this.setState({isFlipping: true});
        this.props.onFlipStart(this.state.isFlipped);
        this._animation(!this.state.isFlipped)
    }
    _animation (isFlipped) {
        if (!this.timer) {
            this.timer = setTimeout(() => {
                this.setState({isFlipped: !this.state.isFlipped});
                this.timer = null
            }, 120)
        }
        Animated.spring(this.state.rotate,
            {
                toValue: Number(isFlipped),
                friction: this.props.friction,
                useNativeDriver: this.props.useNativeDriver
            }
        ).start(() => {
            this.setState({isFlipping: false});
            this.props.onFlipEnd(this.state.isFlipped)
        })
    }

    componentDidMount () {
        if (this.props.alignHeight || this.props.alignWidth) {
            this.measureOtherSideTimeout = setTimeout(this.measureOtherSide.bind(this), 32);
        }
    }

    componentWillUnmount() {
        clearTimeout(this.measureOtherSideTimeout);
    }

    measureOtherSide () {
        this.setState({
            isFlipped: !this.state.isFlipped,
            mesured: true
        })
    }

    render () {
        var c = this.props.children;
        var transform = this.props.perspective ? [{ perspective: this.props.perspective }] : [];
        var render_side = false;

        if (this.props.flipHorizontal) {
            transform.push(
                {rotateY: this.state.rotate.interpolate({
                        inputRange: [0, 1],
                        outputRange: [ '0deg', '180deg' ]
                    })}
            )
        }

        if (this.props.flipVertical) {
            transform.push(
                {rotateX: this.state.rotate.interpolate({
                        inputRange: [0, 1],
                        outputRange: [ '0deg', '180deg' ]
                    })}
            )
        }

        if (this.state.isFlipped) {
            render_side = (
                <Back
                    style={[ this.state.height > 0 && {height: this.state.height}, this.state.width > 0 && {width: this.state.width}]}
                    flipHorizontal={this.props.flipHorizontal}
                    flipVertical={this.props.flipVertical}
                    perspective={this.props.perspective}
                    onLayout={(event) => {
                        var { width, height} = event.nativeEvent.layout;
                        var _update = Object.assign(this.state.back, {width: width, height: height});
                        this.setState({back: _update});
                        if (this.state.mesured) {
                            if (this.props.alignHeight) {
                                this.setState({height: Math.max(this.state.face.height, this.state.back.height)})
                            }
                            if (this.props.alignWidth) {
                                this.setState({width: Math.max(this.state.face.width, this.state.back.width)})
                            }
                        }
                    }}
                >
                    {c[1]}
                </Back>
            )
        } else {
            render_side = (
                <Face
                    style={[ this.state.height > 0 && { height: this.state.height }, this.state.width > 0 && { width: this.state.width }]}
                    onLayout={(event) => {
                        var {width, height} = event.nativeEvent.layout;
                        var _update = Object.assign(this.state.face, {width: width, height: height});
                        this.setState({face: _update});
                        if (this.state.mesured) {
                            if (this.props.alignHeight) {
                                this.setState({height: Math.max(this.state.face.height, this.state.back.height)})
                            }
                            if (this.props.alignWidth) {
                                this.setState({width: Math.max(this.state.face.width, this.state.back.width)})
                            }
                        }
                    }}
                >
                    {c[0]}
                </Face>
            )
        }

        if (this.props.clickable) {
            let opacity = 0;
            if ( ((this.props.alignHeight || this.props.alignWidth) && this.state.mesured) ||
                !(this.props.alignHeight || this.props.alignWidth))  {
                opacity = 1;
            }
            if(this.state.flag){
                this._toggleCard()
            }
            return (
                <View
                    style={{flex:1}}
                    testID={this.props.testID}
                    activeOpacity={1}
                >
                    <Animated.View
                        {...this.props}
                        style={[
                            S.flipCard,
                            {
                                transform,
                                opacity,
                            },
                            this.props.style
                        ]}
                    >
                        {render_side}
                    </Animated.View>
                </View>
            )
        } else {
            return (
                <Animated.View
                    {...this.props}
                    style={[S.flipCard,
                        {transform: transform},
                        this.props.style
                    ]}
                >
                    {render_side}
                </Animated.View>
            )
        }
    }
}
FlipCard.propTypes = {
    flip: PropTypes.bool,
    friction: PropTypes.number,
    perspective: PropTypes.number,
    flipHorizontal: PropTypes.bool,
    flipVertical: PropTypes.bool,
    clickable: PropTypes.bool,
    onFlipEnd: PropTypes.func,
    onFlipStart: PropTypes.func,
    alignHeight: PropTypes.bool,
    alignWidth: PropTypes.bool,
    useNativeDriver: PropTypes.bool,
    flag:PropTypes.bool,
    children (props, propName, componentName) {
        const prop = props[propName];
        if (React.Children.count(prop) !== 2) {
            return new Error(
                '`' + componentName + '` ' +
                'should contain exactly two children. ' +
                'The first child represents the front of the card. ' +
                'The second child represents the back of the card.'
            )
        }
    }
};

FlipCard.defaultProps = {
    flip: false,
    friction: 6,
    perspective: 1000,
    flipHorizontal: false,
    flipVertical: true,
    clickable: true,
    onFlipEnd: () => {},
    onFlipStart: () => {},
    alignHeight: false,
    alignWidth: false,
    useNativeDriver: true,
};


export class Face extends Component {
    render () {
        return (
            <View
                style={[S.face, this.props.style]}
                onLayout={this.props.onLayout}
            >
                {this.props.children}
            </View>
        )
    }
}

Face.propTypes = {
    children (props, propName, componentName) {
    }
};

export class Back extends Component {
    render () {
        var transform = [];
        if (this.props.flipHorizontal) {
            transform.push({scaleX: -1});
            if (Platform.OS === "android") {
                transform.push({perspective: this.props.perspective})
            }
        }
        if (this.props.flipVertical) {
            transform.push({scaleY: -1});
            if (Platform.OS === "android") {
                transform.push({perspective: this.props.perspective})
            }
        }

        return (
            <View
                style={[
                    S.back,
                    this.props.style,
                    {transform: transform}
                ]}
                onLayout={this.props.onLayout}>
                {this.props.children}
            </View>
        )
    }
}

Back.defaultProps = {
    flipHorizontal: false,
    flipVertical: true,
    perspective: 1000,
};

Back.propTypes = {
    flipHorizontal: PropTypes.bool,
    flipVertical: PropTypes.bool,
    perspective: PropTypes.number,
    children (props, propName, componentName) {
    }
};
