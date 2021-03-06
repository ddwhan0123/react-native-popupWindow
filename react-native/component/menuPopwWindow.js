import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Alert,
    Modal,
    Dimensions,
    ART,
} from 'react-native'
const { width, height } = Dimensions.get('window');
let mwidth = 70;
let mheight = 100;
const bgColor = '#2d2d2d';
const top = 50;
let dataArray;
export default class MenuModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible: this.props.show,
        }
        mwidth = this.props.width || 70;
        mheight = this.props.height || 100;
        dataArray = this.props.dataArray;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ isVisible: nextProps.show });
    }

    closeModal() {
        this.setState({
            isVisible: false
        });
        this.props.closeModal(false);
    }

    render() {
        const path = ART.Path();
        path.moveTo(width - 10 - mwidth * 1 / 3 + 3, top);
        path.lineTo(width - 10 - mwidth * 1 / 3 + 9, top - 7);
        path.lineTo(width - 10 - mwidth * 1 / 3 + 15, top);
        path.close();
        return (
            <View style={styles.container}>
                <Modal
                    transparent={true}
                    visible={this.state.isVisible}
                    animationType={'fade'}
                    onRequestClose={() => this.closeModal()}>
                    <TouchableOpacity style={styles.container} activeOpacity={1} onPress={() => this.closeModal()}>
                        <ART.Surface width={width} height={100} >
                            <ART.Shape d={path} fill={bgColor} />
                        </ART.Surface>
                        <View style={styles.modal}>
                            <TouchableOpacity activeOpacity={1} onPress={() => Alert.alert('点击了首页')} style={styles.itemView}>
                                <Image style={styles.imgStyle} source={require('../res/icon_qr.png')} />
                                <Text style={styles.textStyle}>{dataArray[0]}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={1} onPress={() => Alert.alert('点击了店铺')} style={[styles.itemView, { borderColor: '#999', borderTopWidth: 1, borderBottomWidth: 1 }]}>
                                <Image style={styles.imgStyle} source={require('../res/icon_qr.png')} />
                                <Text style={styles.textStyle}>{dataArray[1]}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={1} onPress={() => Alert.alert('点击了客服')} style={styles.itemView}>
                                <Image style={styles.imgStyle} source={require('../res/icon_qr.png')} />
                                <Text style={styles.textStyle}>{dataArray[2]}</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </Modal>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
    },
    modal: {
        backgroundColor: bgColor,
        // opacity:0.8,
        width: mwidth,
        height: mheight,
        position: 'absolute',
        left: width - mwidth - 10,
        top: top,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
    },
    itemView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    textStyle: {
        color: '#fff',
        fontSize: 14,
        marginLeft: 2,
    },
    imgStyle: {
        width: 12,
        height: 12,
    }
});