import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function Edit( { attributes, setAttributes } ) {
    const { label, content } = attributes;

    const blockProps = useBlockProps( {
        className: 'gab-tab-item',
    } );

    return (
        <div { ...blockProps }>
            { /* En éditeur, label et contenu sont affichés ensemble verticalement.
                 La navigation par onglets est gérée uniquement côté frontend. */ }
            <div className="gab-tab-item__label-wrapper">
                <RichText
                    tagName="span"
                    className="gab-tab-item__label"
                    value={ label }
                    onChange={ ( value ) => setAttributes( { label: value } ) }
                    placeholder={ __( 'Label de l\'onglet…', 'gab' ) }
                />
            </div>
            <div className="gab-tab-item__panel">
                <RichText
                    tagName="p"
                    className="gab-tab-item__content"
                    value={ content }
                    onChange={ ( value ) => setAttributes( { content: value } ) }
                    placeholder={ __( 'Contenu du panneau…', 'gab' ) }
                />
            </div>
        </div>
    );
}