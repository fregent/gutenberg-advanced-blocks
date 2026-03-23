import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function Edit( { attributes, setAttributes } ) {
    const { title, content } = attributes;

    const blockProps = useBlockProps( {
        className: 'gab-accordion-item',
    } );

    return (
        <div { ...blockProps }>
            <div className="gab-accordion-item__header">
                <RichText
                    tagName="span"
                    className="gab-accordion-item__title"
                    value={ title }
                    onChange={ ( value ) => setAttributes( { title: value } ) }
                    placeholder={ __( 'Titre du panneau…', 'gab' ) }
                />
                { /* Indicateur visuel statique en éditeur — l'interaction JS est côté frontend */ }
                <span className="gab-accordion-item__icon" aria-hidden="true">+</span>
            </div>
            <div className="gab-accordion-item__body">
                <RichText
                    tagName="p"
                    className="gab-accordion-item__content"
                    value={ content }
                    onChange={ ( value ) => setAttributes( { content: value } ) }
                    placeholder={ __( 'Contenu du panneau…', 'gab' ) }
                />
            </div>
        </div>
    );
}