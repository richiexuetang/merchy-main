import { TabList, Tabs, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import { CustomContainer } from '../../../styles/boxStyles';
import { tabStyles } from '../../../styles';

const PurchaseHistory = () => {
  return (
    <CustomContainer variant="account">
      <Tabs mt={{ lg: 6 }}>
        <TabList justifyContent="flex-start" borderBottom="1px solid #cfcfcf">
          <Tab {...tabStyles}>Current</Tab>
          <Tab {...tabStyles}>Pending</Tab>
          <Tab {...tabStyles}>History</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>No Results.</p>
          </TabPanel>
          <TabPanel>
            <p>No Results.</p>
          </TabPanel>
          <TabPanel>
            <p>No Results.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomContainer>
  );
};

export default PurchaseHistory;
