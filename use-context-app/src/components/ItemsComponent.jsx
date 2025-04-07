import DevLens from "../assets/images/logo-devlens.svg";
import StyleSpy from "../assets/images/logo-style-spy.svg";
import SpeedBoost from "../assets/images/logo-speed-boost.svg";
import JSONWizard from "../assets/images/logo-json-wizard.svg";
import TabMasterPro from "../assets/images/logo-tab-master-pro.svg";
import ViewportBuddy from "../assets/images/logo-viewport-buddy.svg";
import MarkUpNotes from "../assets/images/logo-markup-notes.svg";
import GridGuide from "../assets/images/logo-grid-guides.svg";
import PalettePicker from "../assets/images/logo-palette-picker.svg";
import LinkChecker from "../assets/images/logo-link-checker.svg";
import DOM from "../assets/images/logo-dom-snapshot.svg";
import Console from "../assets/images/logo-console-plus.svg";

// Default items (used when localStorage is empty)
const defaultItems = [
    { id: 1, title: "DevLens", description: "Quick inspect page layouts and visualize element boundaries", image: DevLens, active: true },
    { id: 2, title: "StyleSpy", description: "Instantly analyze and copy CSS from any web page element", image: StyleSpy, active: false },
    { id: 3, title: "SpeedBoost", description: "Optimize browser resource usage to accelerate page loading", image: SpeedBoost, active: true },
    { id: 4, title: "JSONWizard", description: "Formats, validates, and prettifies JSON responses in the browser", image: JSONWizard, active: true },
    { id: 5, title: "TabMasterPro", description: "Organize browser tabs into groups and sessions", image: TabMasterPro, active: false },
    { id: 6, title: "ViewportBuddy", description: "Simulates various screen resolutions directly within the browser", image: ViewportBuddy, active: true },
    { id: 7, title: "MarkUpNotes", description: "Enable annotations", image: MarkUpNotes, active: true },
    { id: 8, title: "GridGuides", description: "c", image: GridGuide, active: false },
    { id: 9, title: "Palette Picker", description: "c", image: PalettePicker, active: true },
    { id: 10, title: "Link Checker", description: "c", image: LinkChecker, active: false },
    { id: 11, title: "DOM Snapshot", description: "c", image: DOM, active: true },
    { id: 12, title: "ConsolePlus", description: "c", image: Console, active: false },
];

// Load items from localStorage or use default values
export function getItems() {
    const savedItems = localStorage.getItem("items");
    return savedItems ? JSON.parse(savedItems) : defaultItems;
}

// Function to toggle an item's active state
export function toggleItem(id) {
    const items = getItems();
    const updatedItems = items.map((item) =>
        item.id === id ? { ...item, active: !item.active } : item
    );

    // Save updated items to localStorage
    localStorage.setItem("items", JSON.stringify(updatedItems));

    return updatedItems;
}

export default getItems();
