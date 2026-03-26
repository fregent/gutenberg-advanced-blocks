import {
    useBlockProps,
    InspectorControls,
    InnerBlocks,
    PanelColorSettings,
} from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Edit( { attributes, setAttributes } ) {
    const { backgroundColor, textColor, paddingTop, paddingBottom, maxWidth } = attributes;

    const blockProps = useBlockProps( {
        style: {
            backgroundColor: backgroundColor || undefined,
            color:           textColor       || undefined,
            paddingTop:      `${ paddingTop }px`,
            paddingBottom:   `${ paddingBottom }px`,
        },
    } );

    return (
        <>
            <InspectorControls>
                { /* PanelColorSettings est un composant Gutenberg dédié
                     qui gère les pickers de couleurs nativement */ }
                <PanelColorSettings
                    title={ __( 'Couleurs', 'gab' ) }
                    colorSettings={ [
                        {
                            value:    backgroundColor,
                            onChange: ( value ) => setAttributes( { backgroundColor: value } ),
                            label:    __( 'Arrière-plan', 'gab' ),
                        },
                        {
                            value:    textColor,
                            onChange: ( value ) => setAttributes( { textColor: value } ),
                            label:    __( 'Texte', 'gab' ),
                        },
                    ] }
                />
                <PanelBody title={ __( 'Espacement', 'gab' ) }>
                    <RangeControl
                        label={ __( 'Padding haut (px)', 'gab' ) }
                        value={ paddingTop }
                        onChange={ ( value ) => setAttributes( { paddingTop: value } ) }
                        min={ 0 }
                        max={ 200 }
                    />
                    <RangeControl
                        label={ __( 'Padding bas (px)', 'gab' ) }
                        value={ paddingBottom }
                        onChange={ ( value ) => setAttributes( { paddingBottom: value } ) }
                        min={ 0 }
                        max={ 200 }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Mise en page', 'gab' ) }>
                    <RangeControl
                        label={ __( 'Largeur max du contenu (px)', 'gab' ) }
                        value={ maxWidth }
                        onChange={ ( value ) => setAttributes( { maxWidth: value } ) }
                        min={ 400 }
                        max={ 1600 }
                    />
                </PanelBody>
            </InspectorControls>

            <div { ...blockProps }>
                { /* Div interne pour centrer et contraindre la largeur du contenu
                     sans affecter le backgroundColor qui doit couvrir toute la largeur */ }
                <div style={ { maxWidth: `${ maxWidth }px`, margin: '0 auto' } }>
                    <InnerBlocks />
                </div>
            </div>
        </>
    );
}