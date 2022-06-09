import { DivGrid, DivPrincipal } from "./CardAbout.style";

function CardAbout() {
  return (
    <DivPrincipal>
      <DivGrid>
        <div>
          <p>Age</p>
          <p>Job</p>
          <p>Address</p>
          <p>Something</p>
        </div>
        <div>
          <p>33 Years</p>
          <p>Software Developer</p>
          <p>Xaxim-SC, Brasil</p>
          <p>Important</p>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
            exercitationem tempore dolorum ipsa sequi pariatur, recusandae iste
            eaque, corrupti, fugit mollitia eveniet! Cumque possimus fugiat quos
            assumenda accusamus perspiciatis esse.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, in.
          </p>
        </div>
      </DivGrid>
    </DivPrincipal>
  );
}

export default CardAbout;
