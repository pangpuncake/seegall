import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import img from "./dijkstra.jpg";
import img1 from "./mst1.jpg";
import img2 from "./mst2.jpg";
import img3 from "./mst3.jpg";
import img4 from "./mst4.jpg";
import img5 from "./mst5.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography className={classes.heading}>
            How to use our visualiser?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h4>Visual</h4>
            Unlike the actual algorithm, our visualisation does not deal with
            graphs. This is a simpler way to view how the algorithm works.
            Starting from the start node, the search branches out to the 4 nodes
            around the starting node, before continuing to branch out to the 4
            nodes around each of the visited nodes, so on.
            <br />
            <br />
            Once checked and visited, the node turns violet.
            <br />
            <br />
            When the search reaches the end node, the shortest path will be
            highlighted in light blue.
            <h4>Walls</h4>
            Press down and drag your mouse over the squares you would like to
            make "walls", places the starting node will not be able to pass
            through.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography className={classes.heading}>
            What is Dijkstra's Algorithm?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <img src={img} alt='Logo' style={{ height: "150px" }} />
            <br />
            The set sptSet is initially empty and distances assigned to vertices
            are [(0, INF, INF, INF, INF, INF, INF, INF)] where INF indicates
            infinite. Now pick the vertex with minimum distance value. The
            vertex 0 is picked, include it in sptSet. So sptSet becomes [0].
            After including 0 to sptSet, update distance values of its adjacent
            vertices. Adjacent vertices of 0 are 1 and 7. The distance values of
            1 and 7 are updated as 4 and 8. Following subgraph shows vertices
            and their distance values, only the vertices with finite distance
            values are shown. The vertices included in SPT are shown in green
            colour.
            <br />
            <br />
            <img src={img1} alt='Logo' style={{ height: "150px" }} />
            <br />
            Pick the vertex with minimum distance value and not already included
            in SPT (not in sptSET). The vertex 1 is picked and added to sptSet.
            So sptSet now becomes [(0, 1)]. Update the distance values of
            adjacent vertices of 1. The distance value of vertex 2 becomes 12.
            <br />
            <br />
            <img src={img2} alt='Logo' style={{ height: "150px" }} />
            <br />
            Pick the vertex with minimum distance value and not already included
            in SPT (not in sptSET). Vertex 7 is picked. So sptSet now becomes["
            "] [(0, 1, 7)]. Update the distance values of adjacent vertices of
            7. The distance value of vertex 6 and 8 becomes finite (15 and 9
            respectively).
            <br />
            <br />
            <img src={img3} alt='Logo' style={{ height: "150px" }} />
            <br />
            Pick the vertex with minimum distance value and not already included
            in SPT (not in sptSET). Vertex 6 is picked. So sptSet now becomes["
            "] [(0, 1, 7, 6)]. Update the distance values of adjacent vertices
            of 6. The distance value of vertex 5 and 8 are updated.
            <br />
            <br />
            <img src={img4} alt='Logo' style={{ height: "150px" }} />
            <br />
            We repeat the above steps until sptSet does include all vertices of
            given graph. Finally, we get the following Shortest Path Tree (SPT).
            <br />
            <br />
            <img src={img5} alt='Logo' style={{ height: "150px" }} />
            <br />
            <p>Taken from GeeksforGeeks</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography className={classes.heading}>Pseudo Code</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <pre>
              <code>
                function dijkstra(G, S)
                <br />
                for each vertex V in G
                <br />
                distance[V] set to infinite //this is to ensure "max" distance
                to compare to
                <br />
                previous[V] set to NULL
                <br />
                If V != S, add V to Priority Queue Q
                <br />
                distance[S] set to 0
                <br />
                <br />
                while Q IS NOT EMPTY
                <br />
                U = Extract MIN from Q
                <br />
                for each unvisited neighbour V of U //checking all the connected
                nodes around (in our case, all 4 sides)
                <br />
                tempDistance set to distance[U] + edge_weight(U, V)
                <br />
                if tempDistance &lt; distance[V]
                <br />
                distance[V] = tempDistance
                <br />
                previous[V] = U
                <br />
                return distance[], previous[] //return the array of the nodes
                visited for the shortest path
              </code>
            </pre>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
