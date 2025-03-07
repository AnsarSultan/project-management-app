import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectID: undefined,
    projects: [],
  });

  function handleStatedAddProject(){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectID: null,
      };
    });
  }

  function handleAddProject(projectData){
    setProjectsState(prevState=>{
      const newProject ={
        ...projectData,
        id: Math.random()
      }
      return {
        ...prevState,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  console.log(projectsState);

  let content;

  if(projectsState.selectedProjectID === null){
    content =  <NewProject onAdd={handleAddProject}/>;
  }else if(projectsState.selectedProjectID === undefined){
    content =  <NoProjectSelected onStateAddProject={handleStatedAddProject}/>
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStateAddProject={handleStatedAddProject}/>
      {content}
    </main>
  );
}

export default App;
