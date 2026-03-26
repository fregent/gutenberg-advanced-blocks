import { useBlockProps, InspectorControls, InnerBlocks, PanelColorSettings } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, SelectControl, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const TEMPLATE = [
    [ 'gab/accordion-item', { title: 'Premier panneau' } ],
    [ 'gab/accordion-item', { title: 'Deuxième panneau' } ],
];

const ICONS = {
    plus:   { label: '+ / −', open: '+',  close: '−' },
    arrow:  { label: '› / ‹', open: '›',  close: '‹' },
    caret:  { label: '▾ / ▴', open: '▾',  close: '▴' },
    circle: { label: '● / ○', open: '●',  close: '○' },
};

export default function Edit( { attributes, setAttributes } ) {
    const { allowMultiple, icon, textColor, backgroundColor, fontSize, animation } = attributes;

    // Dans le blockProps
    const blockProps = useBlockProps( {
        'data-icon':      icon,
        'data-animation': animation,
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
                <PanelBody title={ __( 'Comportement', 'gab' ) }>
                    <ToggleControl
                        label={ __( 'Autoriser plusieurs panneaux ouverts', 'gab' ) }
                        checked={ allowMultiple }
                        onChange={ ( value ) => setAttributes( { allowMultiple: value } ) }
                    />
                    <SelectControl
                        label={ __( 'Animation', 'gab' ) }
                        value={ animation }
                        options={ [
                            { label: 'Glissement (slide)', value: 'slide' },
                            { label: 'Fondu (fade)',       value: 'fade'  },
                            { label: 'Aucune',             value: 'none'  },
                        ] }
                        onChange={ ( value ) => setAttributes( { animation: value } ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Icône', 'gab' ) }>
                    <SelectControl
                        label={ __( 'Style d\'icône', 'gab' ) }
                        value={ icon }
                        options={ Object.entries( ICONS ).map( ( [ value, { label } ] ) => ( {
                            label,
                            value,
                        } ) ) }
                        onChange={ ( value ) => setAttributes( { icon: value } ) }
                    />
                    <p style={ { fontSize: '1.5rem', textAlign: 'center', marginTop: '0.5rem' } }>
                        { ICONS[ icon ]?.open } / { ICONS[ icon ]?.close }
                    </p>
                </PanelBody>
            </InspectorControls>

            <div { ...blockProps }>
                <InnerBlocks
                    allowedBlocks={ [ 'gab/accordion-item' ] }
                    template={ TEMPLATE }
                />
            </div>
        </>
    );
}