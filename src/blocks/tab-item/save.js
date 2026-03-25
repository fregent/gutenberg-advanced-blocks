import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
    const { label, content } = attributes;

    const blockProps = useBlockProps.save( {
        className: 'gab-tab-item',
        // data-label est lu par le JS frontend pour construire la barre de navigation
        'data-label': label,
    } );

    return (
        <div { ...blockProps }>
            { /* Le panel est caché par défaut — le JS frontend retire hidden sur l'item actif */ }
            <div className="gab-tab-item__panel" hidden>
                <RichText.Content
                    tagName="p"
                    className="gab-tab-item__content"
                    value={ content }
                />
            </div>
        </div>
    );
}