import { CustomContainer } from '../../../styles/boxStyles';
import { AccountTr, AccountTh } from '../../../styles';
import { FlexHeader } from '../../';
import { TableContainer, Thead, Table, Box } from '@chakra-ui/react';

const AccountPortfolio = () => {
  return (
    <CustomContainer variant="account" maxW="100%" p="8">
      <FlexHeader heading="Your Portfolio" buttonText="Add Item" />
      <Box overflowX="auto" mt="4">
        <TableContainer>
          <Table variant="comfortable">
            <Thead>
              <AccountTr>
                <AccountTh flex="300 0 auto">Name</AccountTh>
                <AccountTh flex="150 0 auto" w="150px">
                  Purchased Date
                </AccountTh>
                <AccountTh flex="150 0 auto" w="150px">
                  Purchased Price
                </AccountTh>
                <AccountTh flex="150 0 auto" w="150px">
                  Market Value
                </AccountTh>
                <AccountTh flex="150 0 auto" w="150px">
                  Gain/Loss
                </AccountTh>
                <AccountTh flex="150 0 auto" w="150px"></AccountTh>
              </AccountTr>
            </Thead>
          </Table>
        </TableContainer>
      </Box>
    </CustomContainer>
  );
};

export default AccountPortfolio;
