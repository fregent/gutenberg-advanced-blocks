import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
    const { title, text, linkUrl, linkLabel, imageUrl, borderRadius, hasShadow } = attributes;

    const blockProps = useBlockProps.save( {
        className: hasShadow ? 'has-shadow' : '',
        style: { borderRadius: `${ borderRadius }px` },
    } );

    return (
        <div { ...blockProps }>
            { imageUrl && (
                <div className="gab-card__image">
                    <img src={ imageUrl } alt="" />
                </div>
            ) }
            <div className="gab-card__body">
                <RichText.Content tagName="h3" className="gab-card__title" value={ title } />
                <RichText.Content tagName="p"  className="gab-card__text"  value={ text } />
                { linkUrl && (
                    <a href={ linkUrl } className="gab-card__link">
                        <RichText.Content tagName="span" value={ linkLabel } />
                    </a>
                ) }
            </div>
        </div>
    );
}