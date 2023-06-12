import { StyleSheet } from 'react-native';

import { FONT, SIZES, COLORS } from '../../../constants';

const styles = StyleSheet.create({
	container: {
		marginTop: SIZES.xLarge,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	headerTitle: {
		fontSize: SIZES.large,
		fontFamily: FONT.medium,
		color: COLORS.primary,
	},
	headerBtn: {
		fontSize: SIZES.medium,
		fontFamily: FONT.medium,
		color: COLORS.gray,
		borderWidth: 1,
		borderColor: COLORS.secondary,
		borderRadius: SIZES.small / 1.3,
		paddingVertical: SIZES.small / 2.7,
		paddingHorizontal: SIZES.small / 1.4,
		alignContent: 'center',
	},
	cardsContainer: {
		marginTop: SIZES.medium,
	},
});

export default styles;
