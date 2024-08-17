
import MapTemplate from './map.twig';
import MapDocs from '!!raw-loader!./map.docs.mdx';
import MapSource from '!!raw-loader!./map.twig';

export default {
  title: 'Components/Map',
	parameters: {
		componentSubtitle: '',
    componentSource: {
      code: MapSource,
      language: 'twig',
    },
    docs: {
      description: {
        component: MapDocs,
      },
    },
	},
  args: {
  },
  argTypes: {
    map_id: {
      control: 'text',
      description: 'Unique ID for the map container',
      table: {
        type: { summary: 'string' },
      },
    },
    lat: {
      control: 'number',
      description: 'Latitude for the map center and marker',
      table: {
        type: { summary: 'number' },
      },
    },
    lng: {
      control: 'number',
      description: 'Longitude for the map center and marker',
      table: {
        type: { summary: 'number' },
      },
    },
    zoom: {
      control: 'number',
      description: 'Zoom level of the map',
      table: {
        type: { summary: 'number' },
      },
    },
    marker_text: {
      control: 'text',
      description: 'Text to display in the marker popup',
      table: {
        type: { summary: 'string' },
      },
    },
    icon: {
      control: 'text',
      description: 'URL of the custom marker icon (SVG or other image format)',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

const Template = (args) => MapTemplate(args);

export const Default = Template.bind({});
Default.args = {
  map_id: 'map1',  // Identifiant unique pour chaque carte
  lat: 48.8584,    // Ex: Latitude pour Paris
  lng: 2.2945,     // Ex: Longitude pour Paris
  zoom: 13,
  marker_text: 'Here is Paris!',
  icon: 'https://leafletjs.com/examples/custom-icons/leaf-green.png', // Exemple: Icône Leaflet par défaut
};
  
export const SecondMap = Template.bind({});
SecondMap.args = {
  map_id: 'map2',  // Identifiant unique pour la deuxième carte
  lat: 40.7128,    // Ex: Latitude pour New York
  lng: -74.0060,   // Ex: Longitude pour New York
  zoom: 13,
  marker_text: 'Here is New York!',
  icon: 'https://leafletjs.com/examples/custom-icons/leaf-red.png', // Exemple: Une autre icône
};