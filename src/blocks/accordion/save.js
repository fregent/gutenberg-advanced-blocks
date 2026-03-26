import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
    const { allowMultiple, icon } = attributes;

    const blockProps = useBlockProps.save( {
        'data-allow-multiple': allowMultiple ? 'true' : 'false',
        'data-icon': icon,
    } );

    return (
        <div { ...blockProps }>
            <InnerBlocks.Content />
        </div>
    );
}