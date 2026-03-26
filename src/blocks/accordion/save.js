import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
    const { allowMultiple, icon, textColor, backgroundColor, fontSize } = attributes;

    const blockProps = useBlockProps.save( {
        'data-allow-multiple': allowMultiple ? 'true' : 'false',
        'data-icon':           icon,
        style: {
            color:           textColor       || undefined,
            backgroundColor: backgroundColor || undefined,
            fontSize:        `${ fontSize }px`,
        },
    } );

    return (
        <div { ...blockProps }>
            <InnerBlocks.Content />
        </div>
    );
}