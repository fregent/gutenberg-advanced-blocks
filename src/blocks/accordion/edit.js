import { useBlockProps, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

// Template par défaut : 2 items pré-insérés à l'ajout du bloc
const TEMPLATE = [
    [ 'gab/accordion-item', { title: 'Premier panneau' } ],
    [ 'gab/accordion-item', { title: 'Deuxième panneau' } ],
];

export default function Edit( { attributes, setAttributes } ) {
    const { allowMultiple } = attributes;

    const blockProps = useBlockProps();

    return (
        <>
            <InspectorControls>
                <PanelBody title={ __( 'Comportement', 'gab' ) }>
                    <ToggleControl
                        label={ __( 'Autoriser plusieurs panneaux ouverts', 'gab' ) }
                        checked={ allowMultiple }
                        onChange={ ( value ) => setAttributes( { allowMultiple: value } ) }
                    />
                </PanelBody>
            </InspectorControls>

            <div { ...blockProps }>
                { /* InnerBlocks délègue le rendu des enfants à Gutenberg */ }
                <InnerBlocks
                    allowedBlocks={ [ 'gab/accordion-item' ] }
                    template={ TEMPLATE }
                />
            </div>
        </>
    );
}