import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
  const { title, subtitle, backgroundUrl, minHeight, overlayOpacity, textAlign } = attributes;

  const blockProps = useBlockProps.save( {
    style: {
      backgroundImage: backgroundUrl ? `url(${ backgroundUrl })` : 'none',
      minHeight: `${ minHeight }px`,
      position: 'relative',
    },
  } );

  return (
    <div { ...blockProps }>
      <div
        className="gab-hero__overlay"
        style={ { opacity: overlayOpacity / 100 } }
      />
      <div className="gab-hero__content" style={ { textAlign } }>
        <RichText.Content tagName="h1" className="gab-hero__title"    value={ title } />
        <RichText.Content tagName="p"  className="gab-hero__subtitle" value={ subtitle } />
      </div>
    </div>
  );
}