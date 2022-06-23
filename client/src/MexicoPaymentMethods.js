import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";


export default function MexicoPaymentMethods() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Stripe Product</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key="Checkout">
            <TableCell component="th" scope="row">
              Checkout
            </TableCell>
            <TableCell align="right">
              <Button>Launch</Button>
            </TableCell>
          </TableRow>
          <TableRow key="Payment Element">
            <TableCell component="th" scope="row">
              Payment Element
            </TableCell>
            <TableCell align="right">
              <Button>Launch</Button>
            </TableCell>
          </TableRow>
          <TableRow key="Hosted Invoice">
            <TableCell component="th" scope="row">
              Hosted Invoice
            </TableCell>
            <TableCell align="right">
              <Button>Launch</Button>
            </TableCell>
          </TableRow>
          <TableRow key="OXXO Hosted Voucher">
            <TableCell component="th" scope="row">
              OXXO Hosted Voucher
            </TableCell>
            <TableCell align="right">
              <Button>Launch</Button>
            </TableCell>
          </TableRow>
          <TableRow key="SPEI Hosted Instruction">
            <TableCell component="th" scope="row">
              SPEI Hosted Instruction
            </TableCell>
            <TableCell align="right">
              <Button>Launch</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
