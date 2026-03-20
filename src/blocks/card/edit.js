import {
    useBlockProps,
    RichText,
    InspectorControls,
    MediaUpload,
    MediaUploadCheck,
    URLInput,
} from '@wordpress/block-editor';
import {
    PanelBody,
    RangeControl,
    ToggleControl,
    Button,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Edit( { attributes, setAttributes } ) {
    const { title, text, linkUrl, linkLabel, imageUrl, imageId, borderRadius, hasShadow } = attributes;

    const blockProps = useBlockProps( {
        className: hasShadow ? 'has-shadow' : '',
        style: { borderRadius: `${ borderRadius }px` },
    } );

    return (
        <>
            <InspectorControls>
                <PanelBody title={ __( 'Image', 'gab' ) }>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={ ( media ) => setAttributes( {
                                imageUrl: media.url,
                                imageId: media.id,
                            } ) }
                            allowedTypes={ [ 'image' ] }
                            value={ imageId }
                            render={ ( { open } ) => (
                                <Button variant="primary" onClick={ open }>
                                    { imageUrl
                                        ? __( 'Changer l\'image', 'gab' )
                                        : __( 'Choisir une image', 'gab' ) }
                                </Button>
                            ) }
                        />
                    </MediaUploadCheck>
                </PanelBody>
                <PanelBody title={ __( 'Style', 'gab' ) }>
                    <RangeControl
                        label={ __( 'Rayon des coins (px)', 'gab' ) }
                        value={ borderRadius }
                        onChange={ ( value ) => setAttributes( { borderRadius: value } ) }
                        min={ 0 }
                        max={ 32 }
                    />
                    <ToggleControl
                        label={ __( 'Ombre portée', 'gab' ) }
                        checked={ hasShadow }
                        onChange={ ( value ) => setAttributes( { hasShadow: value } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Lien', 'gab' ) }>
                    <URLInput
                        label={ __( 'URL du lien', 'gab' ) }
                        value={ linkUrl }
                        onChange={ ( value ) => setAttributes( { linkUrl: value } ) }
                    />
                </PanelBody>
            </InspectorControls>

            <div { ...blockProps }>
                { imageUrl && (
                    <div className="gab-card__image">
                        <img src={ imageUrl } alt="" />
                    </div>
                ) }
                <div className="gab-card__body">
                    <RichText
                        tagName="h3"
                        className="gab-card__title"
                        value={ title }
                        onChange={ ( value ) => setAttributes( { title: value } ) }
                        placeholder={ __( 'Titre…', 'gab' ) }
                    />
                    <RichText
                        tagName="p"
                        className="gab-card__text"
                        value={ text }
                        onChange={ ( value ) => setAttributes( { text: value } ) }
                        placeholder={ __( 'Description…', 'gab' ) }
                    />
                    { linkUrl && (
                        <RichText
                            tagName="span"
                            className="gab-card__link"
                            value={ linkLabel }
                            onChange={ ( value ) => setAttributes( { linkLabel: value } ) }
                            placeholder={ __( 'Libellé du lien…', 'gab' ) }
                        />
                    ) }
                </div>
            </div>
        </>
    );
}