import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

const COLORS = {
    offWhite: '#fafafa',
}

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.offWhite,
    },
    statusBarPadding: {
        paddingTop: Constants.statusBarHeight,
    },
    listItemCell: {
        backgroundColor: COLORS.offWhite,
    },
    dropShadow: {
        shadowColor: '#ccc',
        shadowOffset: {width: 3, height: 3},
        shadowRadius: 3,
        shadowOpacity: 0.7,
    },
})