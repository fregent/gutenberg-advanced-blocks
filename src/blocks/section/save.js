import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
    const { backgroundColor, textColor, paddingTop, paddingBottom, maxWidth } = attributes;

    const blockProps = useBlockProps.save( {
        style: {
            backgroundColor: backgroundColor || undefined,
            color:           textColor       || undefined,
            paddingTop:      `${ paddingTop }px`,
            paddingBottom:   `${ paddingBottom }px`,
        },
    } );

    return (
        <div { ...blockProps }>
            <div style={ { maxWidth: `${ maxWidth }px`, margin: '0 auto' } }>
                <InnerBlocks.Content />
            </div>
        </div>
    );
}