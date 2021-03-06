import { Tab, SequencedTab } from './tab';
import { TabManager } from './component';
import { TabList, TabPanels, TabPanel, SequencedTabList } from './tab-helpers';

Tab.Manager = TabManager;
Tab.List = TabList;
Tab.Panels = TabPanels;
Tab.Panel = TabPanel;
SequencedTab.List = SequencedTabList;

export { Tab, SequencedTab };

/** @todo Remove helper exports after v6 release */
export { TabManager, TabList, TabPanels, TabPanel, SequencedTabList };
