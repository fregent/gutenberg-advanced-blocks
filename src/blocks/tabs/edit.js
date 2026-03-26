import { useBlockProps, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { PanelBody, RangeControl, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const TEMPLATE = [
    [ 'gab/tab-item', { label: 'Premier onglet' } ],
    [ 'gab/tab-item', { label: 'Deuxième onglet' } ],
];

export default function Edit( { attributes, setAttributes } ) {
    const { defaultTab, tabStyle } = attributes;

    const blockProps = useBlockProps( {
        // data-tab-style transmis au frontend et utilisé comme modificateur CSS
        'data-tab-style': tabStyle,
    } );

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
                <PanelBody title={ __( 'Style des onglets', 'gab' ) }>
                    <SelectControl
                        label={ __( 'Apparence', 'gab' ) }
                        value={ tabStyle }
                        options={ [
                            { label: 'Underline — ligne sous l\'onglet actif', value: 'underline' },
                            { label: 'Pills — onglet avec fond arrondi',       value: 'pills' },
                            { label: 'Bordered — onglet encadré',              value: 'bordered' },
                        ] }
                        onChange={ ( value ) => setAttributes( { tabStyle: value } ) }
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