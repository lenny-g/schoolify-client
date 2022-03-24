import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { GREEN, modal } from '../../styles';

export const ConfirmModal = ({
	open,
	handleClose,
	title,
	message,
	selectedRow,
	handleConfirm,
}) => {
	return (
		<>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description">
				<Box
					sx={{
						...modal.container,
						backgroundColor: GREEN,
					}}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Text in a modal
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
					<Button onClick={handleClose}>Cancel</Button>
					<Button
						onClick={() => {
							handleConfirm(selectedRow.id, selectedRow.absenceRequestId);
						}}>
						Delete
					</Button>
				</Box>
			</Modal>
		</>
	);
};
