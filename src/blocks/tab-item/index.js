import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import Edit from './edit';
import save from './save';

// Pas de style ici — les styles sont gérés par le parent tabs
registerBlockType( metadata.name, { edit: Edit, save } );