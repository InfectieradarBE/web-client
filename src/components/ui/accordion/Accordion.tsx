import React, { HTMLAttributes, useState } from 'react';
import styles from './Accordion.module.scss';
import clsx from 'clsx';
// import ExpandLessIcon from '@material-ui/icons/ExpandLess';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

interface AccordionProps extends HTMLAttributes<HTMLElement> {
  title: string;
  openbuttontext: string;
  closebuttontext: string;
}

const Accordion: React.FC<AccordionProps> = (props) => {

  const [opened, setOpened] = useState(false);

  return (
    <div
      {...props}>
      { /* Accordion Header */}
      <div
        className={clsx(styles.accordionHeader, "p-2 bg-light")}
        onClick={() => setOpened(!opened)}>
        <div className={styles.accordionTitle}>
          {props.title}
        </div>
        <div className={styles.accordionExpandButton}>
          {
            // TOGGLE BETWEEN OPEN TEXT-ICON AND CLOSE TEXT-ICON
            opened ?
              <React.Fragment>
                {props.closebuttontext}
                {'expand less'}
              </React.Fragment> :
              <React.Fragment>
                {props.openbuttontext}
                {'expand more'}
              </React.Fragment>
          }
        </div>
      </div>

      <div id="accordionBody"
        className={opened ? clsx(
          styles.accordionBody,
          styles.accordionBodyEnabled, "py-2")
          : styles.accordionBody}>
        {props.children}
      </div>
    </div>
  );
};

export default Accordion;
