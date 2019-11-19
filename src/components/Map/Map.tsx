import React, { Component } from "react";
import { Container, Typography } from "@material-ui/core";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

type MapProps = {};

const ReactMapbox = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoidGlsb2VsYXIiLCJhIjoiY2syeDU5c243MDZxcjNicHN2dnlzZHp0ZyJ9.UpeJuh8LffKWwxdKX33lAw"
});

export class Map extends Component<MapProps> {
  constructor(props: MapProps) {
    super(props)
  }
  private mapRef = React.createRef();

  componentDidMount() {
    console.log(this.mapRef)
  }

  render() {
    return (
    <Container ref = {this.mapRef}>
      <Typography variant="h6">Карта</Typography>
      <ReactMapbox
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "50vh",
          width: "50vw"
        }}
      >
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        </Layer>
      </ReactMapbox>
    </Container>
    );
  }
}

// const ReactMapbox = ReactMapboxGl({
//   accessToken:
//     "pk.eyJ1IjoidGlsb2VsYXIiLCJhIjoiY2syeDU5c243MDZxcjNicHN2dnlzZHp0ZyJ9.UpeJuh8LffKWwxdKX33lAw"
// });

// const Map2: React.FC = () => {
//   return (
//     <Container>
//       <Typography variant="h6">Карта</Typography>
//       <ReactMapbox
//         style="mapbox://styles/mapbox/streets-v9"
//         containerStyle={{
//           height: "50vh",
//           width: "50vw"
//         }}
//       >
//         <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
//           <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
//         </Layer>
//       </ReactMapbox>
//     </Container>
//   );
// };

export default Map;
