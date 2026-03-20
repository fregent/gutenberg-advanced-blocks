import {
  useBlockProps,
  RichText,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from '@wordpress/block-editor';
import {
  PanelBody,
  RangeControl,
  Button,
  SelectControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Edit( { attributes, setAttributes } ) {
  const { title, subtitle, backgroundUrl, backgroundId, minHeight, overlayOpacity, textAlign } = attributes;

  const blockProps = useBlockProps( {
    style: {
      backgroundImage: backgroundUrl ? `url(${ backgroundUrl })` : 'none',
      minHeight: `${ minHeight }px`,
      position: 'relative',
    },
  } );

  return (
    <>
      <InspectorControls>
        <PanelBody title={ __( 'Image de fond', 'gab' ) }>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={ ( media ) => setAttributes( {
                  backgroundUrl: media.url,
                  backgroundId: media.id,
              } ) }
              allowedTypes={ [ 'image' ] }
              value={ backgroundId }
              render={ ( { open } ) => (
                  <Button variant="primary" onClick={ open }>
                      { backgroundUrl
                          ? __( 'Changer l\'image', 'gab' )
                          : __( 'Choisir une image', 'gab' ) }
                  </Button>
              ) }
            />
          </MediaUploadCheck>
        </PanelBody>
        <PanelBody title={ __( 'Mise en page', 'gab' ) }>
          <RangeControl
            label={ __( 'Hauteur minimale (px)', 'gab' ) }
            value={ minHeight }
            onChange={ ( value ) => setAttributes( { minHeight: value } ) }
            min={ 200 }
            max={ 1000 }
          />
          <RangeControl
            label={ __( 'Opacité du calque sombre (%)', 'gab' ) }
            value={ overlayOpacity }
            onChange={ ( value ) => setAttributes( { overlayOpacity: value } ) }
            min={ 0 }
            max={ 100 }
          />
          <SelectControl
            label={ __( 'Alignement du texte', 'gab' ) }
            value={ textAlign }
            options={ [
                { label: 'Gauche',  value: 'left' },
                { label: 'Centre',  value: 'center' },
                { label: 'Droite',  value: 'right' },
            ] }
            onChange={ ( value ) => setAttributes( { textAlign: value } ) }
          />
        </PanelBody>
      </InspectorControls>

      <div { ...blockProps }>
        <div
          className="gab-hero__overlay"
          style={ { opacity: overlayOpacity / 100 } }
        />
        <div className="gab-hero__content" style={ { textAlign } }>
          <RichText
            tagName="h1"
            className="gab-hero__title"
            value={ title }
            onChange={ ( value ) => setAttributes( { title: value } ) }
            placeholder={ __( 'Titre principal…', 'gab' ) }
          />
          <RichText
            tagName="p"
            className="gab-hero__subtitle"
            value={ subtitle }
            onChange={ ( value ) => setAttributes( { subtitle: value } ) }
            placeholder={ __( 'Sous-titre…', 'gab' ) }
          />
        </div>
      </div>
    </>
  );
}