import { useBlockProps, InspectorControls, InnerBlocks, PanelColorSettings } from '@wordpress/block-editor';
import { PanelBody, RangeControl, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const TEMPLATE = [
    [ 'gab/tab-item', { label: 'Premier onglet' } ],
    [ 'gab/tab-item', { label: 'Deuxième onglet' } ],
];

export default function Edit( { attributes, setAttributes } ) {
    const { defaultTab, tabStyle, textColor, backgroundColor, fontSize, animation } = attributes;

    const blockProps = useBlockProps( {
        'data-tab-style':  tabStyle,
        'data-animation':  animation,
        style: {
            color:           textColor       || undefined,
            backgroundColor: backgroundColor || undefined,
            fontSize:        `${ fontSize }px`,
        },
    } );

    return (
        <>
            <InspectorControls>
                <PanelColorSettings
                    title={ __( 'Couleurs', 'gab' ) }
                    colorSettings={ [
                        {
                            value:    textColor,
                            onChange: ( value ) => setAttributes( { textColor: value } ),
                            label:    __( 'Texte', 'gab' ),
                        },
                        {
                            value:    backgroundColor,
                            onChange: ( value ) => setAttributes( { backgroundColor: value } ),
                            label:    __( 'Arrière-plan', 'gab' ),
                        },
                    ] }
                />
                <PanelBody title={ __( 'Typographie', 'gab' ) }>
                    <RangeControl
                        label={ __( 'Taille du texte (px)', 'gab' ) }
                        value={ fontSize }
                        onChange={ ( value ) => setAttributes( { fontSize: value } ) }
                        min={ 12 }
                        max={ 24 }
                    />
                </PanelBody>
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
                            { label: 'Underline', value: 'underline' },
                            { label: 'Pills',     value: 'pills' },
                            { label: 'Bordered',  value: 'bordered' },
                        ] }
                        onChange={ ( value ) => setAttributes( { tabStyle: value } ) }
                    />
                    <SelectControl
                        label={ __( 'Animation des panels', 'gab' ) }
                        value={ animation }
                        options={ [
                            { label: 'Fondu (fade)', value: 'fade' },
                            { label: 'Aucune',       value: 'none' },
                        ] }
                        onChange={ ( value ) => setAttributes( { animation: value } ) }
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