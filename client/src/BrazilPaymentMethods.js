import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

export default function BrazilPaymentMethods() {
  const onClickCheckout = (endpoint) => {
    fetch(endpoint, { method: "POST" })
      .then((response) => response.json())
      .then((data) => {
        if (data.url) {
          window.location.href = data.url;
        }
      })
      .catch(function (err) {
        console.info(err);
      });
  };

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
              <Button onClick={() => onClickCheckout("/br/create-br-checkout")}>
                Launch
              </Button>
            </TableCell>
          </TableRow>
          <TableRow key="Boleto Hosted Voucher">
            <TableCell component="th" scope="row">
              Boleto Hosted Voucher
            </TableCell>
            <TableCell align="right">
              <Button
                onClick={() =>
                  onClickCheckout("/br/create-boleto-hosted-voucher")
                }
              >
                Launch
              </Button>
            </TableCell>
          </TableRow>
          <TableRow key="PIX Hosted Instruction">
            <TableCell component="th" scope="row">
              PIX Hosted Instruction
            </TableCell>
            <TableCell align="right">
              <Button
                onClick={() =>
                  onClickCheckout("/br/create-pix-hosted-instructions")
                }
              >
                Launch
              </Button>
            </TableCell>
          </TableRow>
          <TableRow key="Payment Element">
            <TableCell component="th" scope="row">
              Payment Element
            </TableCell>
            <TableCell align="right">
              <Button>Work In Progress</Button>
            </TableCell>
          </TableRow>
          <TableRow key="Hosted Invoice">
            <TableCell component="th" scope="row">
              Hosted Invoice
            </TableCell>
            <TableCell align="right">
              <Button>Work In Progress</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
