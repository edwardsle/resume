import LinkUnderline from '~/components/linkunderline';
import Introduce from './introduce';
import Jobs from './jobs';
import Skills from './skills';
import Education from './education';
import Services from './services';
import Projects from './projects/projects';
import Footer from '~/layouts/footer';

export default function Resume() {
    return (
      <div className="flex flex-wrap gap-y-20">
        <Introduce />
        <Services />
        <Education />
        <Skills />
        <Jobs />
        <Projects />
        <Footer />
      </div>
    );
  }
