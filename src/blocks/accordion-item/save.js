import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
    const { title, content, initialOpen } = attributes;

    const blockProps = useBlockProps.save( {
        className: 'gab-accordion-item',
        // initialOpen injecté en data attribute — lu par le JS frontend
        'data-open': initialOpen ? 'true' : 'false',
    } );

    return (
        <div { ...blockProps }>
            <button
                className="gab-accordion-item__header"
                aria-expanded={ initialOpen }
            >
                <RichText.Content
                    tagName="span"
                    className="gab-accordion-item__title"
                    value={ title }
                />
                <span className="gab-accordion-item__icon" aria-hidden="true">+</span>
            </button>
            { /* hidden par défaut, révélé via JS au clic */ }
            <div
                className="gab-accordion-item__body"
                hidden={ ! initialOpen }
            >
                <RichText.Content
                    tagName="p"
                    className="gab-accordion-item__content"
                    value={ content }
                />
            </div>
        </div>
    );
}