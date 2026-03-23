import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
    const { allowMultiple } = attributes;

    const blockProps = useBlockProps.save( {
        // Pont entre l'attribut Gutenberg et le JS frontend
        'data-allow-multiple': allowMultiple ? 'true' : 'false',
    } );

    return (
        <div { ...blockProps }>
            <InnerBlocks.Content />
        </div>
    );
}