import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { deleteContact } from '../../redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';
import { ContactRedact } from 'components/ContactRedact/ContactRedact';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/Delete';
import CallIcon from '@mui/icons-material/Call';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import css from './ContactListItem.module.scss';

export const ContactListItem = ({ contact }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  const handleOpen = () => {
    setIsModalOpen(true);
  };
  const handleClose = () => setIsModalOpen(false);

  return (
    <>
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableScrollLock={true}
      >
        <Box className={css.modal}>
          <ContactRedact contact={contact} handleClose={handleClose} />
        </Box>
      </Modal>

      <ListItem className={clsx(css.item, isLoading && css.loading)}>
        <PersonIcon sx={{ marginRight: 1 }} />
        <Typography variant="subtitle1">
          {contact.name}: {contact.number}
        </Typography>
        <Tooltip title="Call to" placement="bottom-start" arrow>
          <IconButton href={`tel:${contact.number}`}>
            <CallIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Edit" placement="bottom-start" arrow>
          <IconButton onClick={handleOpen} sx={{ marginLeft: 'auto' }}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete" placement="bottom-start" arrow>
          <IconButton onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </ListItem>
    </>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    phone: PropTypes.string,
  }),
};
