import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
    const { defaultTab } = attributes;

    const blockProps = useBlockProps.save( {
        // data-default-tab est lu par view.js pour activer le bon onglet au chargement
        'data-default-tab': defaultTab,
    } );

    return (
        <div { ...blockProps }>
            { /* La nav (boutons d'onglets) est construite dynamiquement par view.js
                 à partir des data-label de chaque tab-item — pas en PHP/HTML statique */ }
            <div className="gab-tabs__nav" role="tablist" />
            <div className="gab-tabs__panels">
                <InnerBlocks.Content />
            </div>
        </div>
    );
}