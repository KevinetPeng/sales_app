import React from "react";
import { makeStyles } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

const styles = makeStyles({
  addButton: {
    margin: "2px 2px 2px 2px",
    position: "fixed",
    bottom: 30,
    right: 30,
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
});

function AddSale(props) {
  const classes = styles();

  //useState hook for the dialog box state.
  //expected state is a boolean
  const [dialogState, setDialogState] = React.useState(false);

  //handle FAB click to open dialog
  const handleClick = () => {
    setDialogState(true);
  };

  //handle dialog close and set dialog state to false
  const handleDialogClose = () => {
    setDialogState(false);
  };

  //handle sale data entry
  const handleEnterSale = () => {
    // this is the endpoint to enter the sale data
    setDialogState(false);
  };

  return (
    <div>
      <Fab
        aria-label="addSale"
        onClick={handleClick}
        className={classes.addButton}
        color="primary"
      >
        <AddIcon />
      </Fab>
      <Dialog
        open={dialogState}
        onClose={handleDialogClose}
        aria-label="Add Sale Dialog"
      >
        <DialogTitle>Add Sale</DialogTitle>
        <DialogContent>
          <DialogContentText>
            If you know of an ongoing sale but don't see it in our catalog, you
            can add it here.
          </DialogContentText>
          {/* This is where the text fields and labels would go for adding sale information.
                    Note that text output would need to be routed to backend and into DB */}
          <form className={classes.form}>
            <TextField label="Company Name" />
            <TextField label="Sale Description" multiline />
            <TextField label="Sale Amount" type="number" />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEnterSale} color="primary">
            Enter
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddSale;
