import { useBlockProps, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const TEMPLATE = [
    [ 'gab/accordion-item', { title: 'Premier panneau' } ],
    [ 'gab/accordion-item', { title: 'Deuxième panneau' } ],
];

// Icônes disponibles — valeur = caractère affiché dans le DOM
const ICONS = {
    plus:   { label: '+ / −',    open: '+',  close: '−' },
    arrow:  { label: '› / ‹',    open: '›',  close: '‹' },
    caret:  { label: '▾ / ▴',    open: '▾',  close: '▴' },
    circle: { label: '● / ○',    open: '●',  close: '○' },
};

export default function Edit( { attributes, setAttributes } ) {
    const { allowMultiple, icon } = attributes;

    const blockProps = useBlockProps( {
        // data-icon transmis au frontend pour que view.js sache quelle icône utiliser
        'data-icon': icon,
    } );

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
                    { /* Prévisualisation de l'icône choisie */ }
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