import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import ButtonGroup from "@mui/material/ButtonGroup";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import InputLabel from "@mui/material/InputLabel";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Avatar from "@mui/material/Avatar";
import FolderIcon from "@mui/icons-material/Folder";
import PageviewIcon from "@mui/icons-material/Pageview";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { green, pink } from "@mui/material/colors";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import List from "@mui/material/List";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import { DataGrid } from "@mui/x-data-grid";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";

// Additional MUI Component Imports
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import AvatarGroup from "@mui/material/AvatarGroup";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import LinearProgress from "@mui/material/LinearProgress";
import Menu from "@mui/material/Menu";
import Pagination from "@mui/material/Pagination";
import Popover from "@mui/material/Popover";
import Skeleton from "@mui/material/Skeleton";
import Snackbar from "@mui/material/Snackbar";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import CopyIcon from "@mui/icons-material/FileCopy";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Tooltip from "@mui/material/Tooltip";
import Container from "@mui/material/Container";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
];

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  { field: "age", headerName: "Age", type: "number", width: 90 },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
];

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export default function Layout() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [formats, setFormats] = React.useState(() => ["bold", "italic"]);
  const [value, setValue] = React.useState(2);
  const [age, setAge] = React.useState("");
  const [sliderVal, setSliderVal] = React.useState(30);

  // States for interactive examples
  const [bottomNavVal, setBottomNavVal] = React.useState(0);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [anchorElMenu, setAnchorElMenu] = React.useState(null);
  const [anchorElPopover, setAnchorElPopover] = React.useState(null);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [backdropOpen, setBackdropOpen] = React.useState(false);
  const [tabVal, setTabVal] = React.useState(0);

  const handleDelete = () => console.info("Clicked delete");
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[{ marginRight: 5 }, open && { display: "none" }]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            MUI Components Library Demonstration
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={[
                  { minHeight: 48, px: 2.5 },
                  open ? { justifyContent: "initial" } : { justifyContent: "center" },
                ]}
              >
                <ListItemIcon
                  sx={[
                    { minWidth: 0, justifyContent: "center" },
                    open ? { mr: 3 } : { mr: "auto" },
                  ]}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        <h2>Inputs</h2>
        <h5>Autocomplete</h5>
        <Autocomplete
          disablePortal
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />

        <h5>Button</h5>
        <Stack direction="row" spacing={2}>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
          <Button variant="contained" endIcon={<SendIcon />}>Send</Button>
        </Stack>

        <h5>Button Group</h5>
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>

        <h5>Checkbox</h5>
        <div>
          <Checkbox defaultChecked />
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          <Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} />
        </div>

        <h5>Floating Action Button (Fab)</h5>
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <Fab color="primary"><AddIcon /></Fab>
          <Fab color="secondary"><EditIcon /></Fab>
          <Fab variant="extended"><NavigationIcon sx={{ mr: 1 }} />Navigate</Fab>
        </Box>

        <h5>Radio Group</h5>
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup row name="gender-group">
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>

        <h5>Rating</h5>
        <Rating value={value} onChange={(e, val) => setValue(val)} />

        <h5>Select</h5>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel>Age</InputLabel>
          <Select value={age} label="Age" onChange={(e) => setAge(e.target.value)}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
          </Select>
        </FormControl>

        <h5>Slider</h5>
        <Box sx={{ width: 200 }}>
          <Stack spacing={2} direction="row" sx={{ alignItems: "center" }}>
            <VolumeDown />
            <Slider value={sliderVal} onChange={(e, v) => setSliderVal(v)} />
            <VolumeUp />
          </Stack>
        </Box>

        <h5>Switch</h5>
        <Switch defaultChecked />

        <h5>TextField</h5>
        <TextField label="Outlined" variant="outlined" sx={{ mr: 2 }} />
        <TextField label="Filled" variant="filled" sx={{ mr: 2 }} />
        <TextField label="Standard" variant="standard" />

        <h5>Toggle Button</h5>
        <ToggleButtonGroup value={formats} onChange={(e, f) => setFormats(f)}>
          <ToggleButton value="bold"><FormatBoldIcon /></ToggleButton>
          <ToggleButton value="italic"><FormatItalicIcon /></ToggleButton>
          <ToggleButton value="underlined"><FormatUnderlinedIcon /></ToggleButton>
        </ToggleButtonGroup>

        <Divider sx={{ my: 4 }} />
        <h2>Data Display</h2>

        <h5>Avatar & Avatar Group</h5>
        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
          <Avatar sx={{ bgcolor: pink[500] }}><PageviewIcon /></Avatar>
          <AvatarGroup max={4}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </AvatarGroup>
        </Stack>

        <h5>Badge</h5>
        <Badge badgeContent={4} color="primary">
          <MailIcon />
        </Badge>

        <h5>Chip</h5>
        <Stack direction="row" spacing={1}>
          <Chip label="Deletable" onDelete={handleDelete} />
          <Chip label="Outlined" variant="outlined" color="primary" />
        </Stack>

        <h5>Divider</h5>
        <Divider sx={{ my: 2 }} />

        <h5>List</h5>
        <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <ListItem>
            <ListItemAvatar><Avatar><ImageIcon /></Avatar></ListItemAvatar>
            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
          </ListItem>
        </List>

        <h5>Table (Basic Standard)</h5>
        <TableContainer component={Paper} sx={{ maxWidth: 400, mb: 2 }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Dessert</TableCell>
                <TableCell align="right">Calories</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Frozen yogurt</TableCell>
                <TableCell align="right">159</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <h5>Data Grid</h5>
        <Paper sx={{ height: 250, width: "100%", mb: 2 }}>
          <DataGrid rows={rows} columns={columns} />
        </Paper>

        <h5>Tooltip</h5>
        <Tooltip title="Delete Item">
          <IconButton><DeleteIcon /></IconButton>
        </Tooltip>

        <h5>Typography</h5>
        <Typography variant="h4" gutterBottom>h4. Heading</Typography>

        <Divider sx={{ my: 4 }} />
        <h2>Feedback</h2>

        <h5>Alert</h5>
        <Alert severity="info" sx={{ mb: 2 }}>
          <AlertTitle>Info</AlertTitle>
          This is an info alert — check it out!
        </Alert>

        <h5>Backdrop</h5>
        <Button variant="outlined" onClick={() => setBackdropOpen(true)}>Show Backdrop</Button>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={backdropOpen}
          onClick={() => setBackdropOpen(false)}
        >
          <CircularProgress color="inherit" />
        </Backdrop>

        <h5>Dialog</h5>
        <Button variant="outlined" onClick={() => setDialogOpen(true)}>Open Dialog</Button>
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogContent>
            <DialogContentText>This is a standard Material UI modal dialog.</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDialogOpen(false)}>Close</Button>
          </DialogActions>
        </Dialog>

        <h5>Progress (Circular & Linear)</h5>
        <Box sx={{ width: "100%", my: 2 }}>
          <CircularProgress sx={{ mr: 2 }} />
          <Box sx={{ width: 200, display: "inline-block" }}>
            <LinearProgress />
          </Box>
        </Box>

        <h5>Skeleton</h5>
        <Skeleton variant="rectangular" width={210} height={118} />

        <h5>Snackbar</h5>
        <Button onClick={() => setSnackbarOpen(true)}>Open Snackbar</Button>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={() => setSnackbarOpen(false)}
          message="Note archived"
        />

        <Divider sx={{ my: 4 }} />
        <h2>Surfaces</h2>

        <h5>Accordion</h5>
        <Accordion sx={{ maxWidth: 400 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
          </AccordionDetails>
        </Accordion>

        <h5>Card</h5>
        <Card sx={{ maxWidth: 275, my: 2 }}>
          <CardContent>
            <Typography variant="h5">Word of the Day</Typography>
            <Typography color="text.secondary">be•nev•o•lent</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <h5>Paper</h5>
        <Paper elevation={3} sx={{ p: 2, maxWidth: 300 }}>
          <Typography>Paper surface with elevation.</Typography>
        </Paper>

        <Divider sx={{ my: 4 }} />
        <h2>Navigation</h2>

        <h5>Bottom Navigation</h5>
        <Paper sx={{ maxWidth: 500, my: 2 }} elevation={3}>
          <BottomNavigation
            showLabels
            value={bottomNavVal}
            onChange={(e, val) => setBottomNavVal(val)}
          >
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
          </BottomNavigation>
        </Paper>

        <h5>Breadcrumbs</h5>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="#">MUI</Link>
          <Link underline="hover" color="inherit" href="#">Core</Link>
          <Typography color="text.primary">Breadcrumb</Typography>
        </Breadcrumbs>

        <h5>Menu</h5>
        <Button onClick={(e) => setAnchorElMenu(e.currentTarget)}>Open Menu</Button>
        <Menu
          anchorEl={anchorElMenu}
          open={Boolean(anchorElMenu)}
          onClose={() => setAnchorElMenu(null)}
        >
          <MenuItem onClick={() => setAnchorElMenu(null)}>Profile</MenuItem>
          <MenuItem onClick={() => setAnchorElMenu(null)}>My account</MenuItem>
        </Menu>

        <h5>Pagination</h5>
        <Pagination count={10} color="primary" sx={{ my: 2 }} />

        <h5>Popover</h5>
        <Button variant="contained" onClick={(e) => setAnchorElPopover(e.currentTarget)}>
          Open Popover
        </Button>
        <Popover
          open={Boolean(anchorElPopover)}
          anchorEl={anchorElPopover}
          onClose={() => setAnchorElPopover(null)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        >
          <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
        </Popover>

        <h5>Speed Dial</h5>
        <Box sx={{ height: 160, transform: 'translateZ(0px)', flexGrow: 1 }}>
          <SpeedDial
            ariaLabel="SpeedDial example"
            sx={{ position: 'absolute', bottom: 16, right: 16 }}
            icon={<SpeedDialIcon />}
          >
            <SpeedDialAction icon={<CopyIcon />} tooltipTitle="Copy" />
            <SpeedDialAction icon={<SaveIcon />} tooltipTitle="Save" />
            <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" />
            <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" />
          </SpeedDial>
        </Box>

        <h5>Stepper</h5>
        <Box sx={{ width: '100%', my: 2 }}>
          <Stepper activeStep={1}>
            {['Select campaign', 'Create an ad group', 'Create an ad'].map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        <h5>Tabs</h5>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabVal} onChange={(e, val) => setTabVal(val)}>
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </Box>

        <Divider sx={{ my: 4 }} />
        <h2>Layout</h2>

        <h5>Container</h5>
        <Container maxWidth="sm" sx={{ bgcolor: '#cfe8fc', height: '50px', display: 'flex', alignItems: 'center' }}>
          <Typography>Fixed-width centered container</Typography>
        </Container>

        <h5>Grid</h5>
        <Grid container spacing={2} sx={{ my: 2 }}>
          <Grid item xs={8}>
            <Paper sx={{ p: 1, textAlign: 'center' }}>xs=8</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper sx={{ p: 1, textAlign: 'center' }}>xs=4</Paper>
          </Grid>
        </Grid>

        <h5>Image List</h5>
        <ImageList sx={{ width: 300, height: 160 }} cols={3} rowHeight={100}>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format" alt="Breakfast" loading="lazy" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format" alt="Burger" loading="lazy" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format" alt="Camera" loading="lazy" />
          </ImageListItem>
        </ImageList>

        <h5>Stack</h5>
        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          <Paper sx={{ p: 1 }}>Item 1</Paper>
          <Paper sx={{ p: 1 }}>Item 2</Paper>
          <Paper sx={{ p: 1 }}>Item 3</Paper>
        </Stack>
      </Box>
    </Box>
  );
}