/**
 * External dependencies
 */
import { TouchableWithoutFeedback, View } from 'react-native';

/**
 * WordPress dependencies
 */
import { Icon } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { MediaEdit } from '../media-edit';
import SvgIconCustomize from './icon-customize';
import styles from './style.scss';

const ImageEditingButton = ( {
	isSelected,
	isUploadFailed,
	isUploadInProgress,
	onDelete,
	onSelectMediaUploadOption,
	openMediaOptions,
	url,
} ) => {
	if ( ! isSelected || ! url || isUploadInProgress || isUploadFailed ) {
		return null;
	}
	return (
		<MediaEdit
			onDelete={ onDelete }
			onSelect={ onSelectMediaUploadOption }
			openReplaceMediaOptions={ openMediaOptions }
			source={ { uri: url } }
			render={ ( { open, mediaOptions } ) => (
				<TouchableWithoutFeedback onPress={ open }>
					<View style={ styles.editContainer }>
						<View style={ styles.edit }>
							{ mediaOptions() }
							<Icon
								size={ 16 }
								icon={ SvgIconCustomize }
								{ ...styles.iconCustomise }
							/>
						</View>
					</View>
				</TouchableWithoutFeedback>
			) }
		/>
	);
};

export default ImageEditingButton;
