export const FRAMER_MOTION_LIST_ITEM_VARIANTS = {
  hidden: { scale: 0.8, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { type: "spring" } },
};

export const FRAMER_MOTION_UP = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.1, type: "ease" } },
};

export const FRAMER_MOTION_UP_LATE = {
  hidden: { opacity: 0, y: 40, after: 1 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, type: "ease" } },
};

export const FRAMER_MOTION_CONTAINER = {
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const FRAMER_MOTION_ITEM = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: .2
    }
  }
}

export const FRAMER_MOTION_UP_TWO = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: .4
    }
  }
}


export const FRAMER_MOTION_SIDE  = {
  hidden: { opacity: 0, x: -200 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: 'easeInOut',
      duration: .2
    }
  }
}



export const STAGGER_CHILD_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, type: "spring" } },
};

export const SWIPE_REVEAL_ANIMATION_SETTINGS = {
  initial: { height: 0 },
  animate: { height: "auto" },
  exit: { height: 0 },
  transition: { duration: 0.15, ease: "easeOut" },
};

export const FADE_IN_ANIMATION_SETTINGS = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
};
