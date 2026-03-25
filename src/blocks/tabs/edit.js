import { useBlockProps, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const TEMPLATE = [
    [ 'gab/tab-item', { label: 'Premier onglet' } ],
    [ 'gab/tab-item', { label: 'Deuxième onglet' } ],
];

export default function Edit( { attributes, setAttributes } ) {
    const { defaultTab } = attributes;

    const blockProps = useBlockProps();

    return (
        <>
            <InspectorControls>
                <PanelBody title={ __( 'Paramètres', 'gab' ) }>
                    <RangeControl
                        label={ __( 'Onglet actif par défaut', 'gab' ) }
                        value={ defaultTab }
                        onChange={ ( value ) => setAttributes( { defaultTab: value } ) }
                        min={ 0 }
                        max={ 9 }
                        help={ __( '0 = premier onglet', 'gab' ) }
                    />
                </PanelBody>
            </InspectorControls>

            <div { ...blockProps }>
                <InnerBlocks
                    allowedBlocks={ [ 'gab/tab-item' ] }
                    template={ TEMPLATE }
                />
            </div>
        </>
    );
}