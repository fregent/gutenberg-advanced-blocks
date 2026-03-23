import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save() {
    const blockProps = useBlockProps.save();

    return (
        <div { ...blockProps }>
            { /* InnerBlocks.Content sauvegarde le HTML de tous les enfants */ }
            <InnerBlocks.Content />
        </div>
    );
}