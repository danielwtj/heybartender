import { StyleSheet, Dimensions } from 'react-native'
import Constants from 'expo-constants'

const TILESIZE = Dimensions.get('window').width * .4

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8debd',
    },
    statusBarPadding: {
        paddingTop: Constants.statusBarHeight,
    },
    searchContainer: {
        backgroundColor: '#f8f8f2',
        borderRadius: 10,
        marginRight: 5,
        paddingVertical: 2,
        flex: 1,
    },
    searchInputContainer: {
        borderBottomWidth: 0,
    },
    filterButton: {
        backgroundColor: '#f8f8f2',
        borderRadius: 10,
        padding: 5,
        marginLeft: 5,
    },
    searchFilterRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 15,
    },
    dropShadow: {
        shadowColor: '#ccc',
        shadowOffset: {width: 3, height: 3},
        shadowRadius: 3,
        shadowOpacity: 0.7,
    },
    whiteRoundedBox: {
        backgroundColor: '#f8f8f2',
        margin: 10,
        borderRadius: 10,
        padding: 10,
    },
    doubleCenter: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    tileSize: {
        width: TILESIZE,
        height: TILESIZE,
    },
})