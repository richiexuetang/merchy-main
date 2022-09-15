/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  useRef,
  useEffect,
  MouseEvent,
  FC,
  ReactElement,
  forwardRef,
  Ref,
} from 'react';
import { mergeRefs } from 'react-merge-refs';
import hasParent from './has-parent';

interface MouseEnterProps {
  active: boolean;
  onMouseEnter: (e?: MouseEvent) => void;
  children: any;
  ref?: Ref<any>;
}

/**
 * Use forward ref to allow this component to be used with other components like
 * focus-trap-react, that rely on the same type of ref forwarding to direct children
 */
const MouseEnter: FC<MouseEnterProps> = forwardRef(
  ({ active = true, onMouseEnter, children }, forwardedRef) => {
    const innerRef = useRef();

    const child = children ? (React.Children.only(children) as any) : undefined;

    if (!child || child.type === React.Fragment) {
      /**
       * React Fragments can't be used, as it would not be possible to pass the ref
       * created here to them.
       */
      throw new Error('A valid non Fragment React Children should be provided');
    }

    if (typeof onMouseEnter != 'function') {
      throw new Error('onClick must be a valid function');
    }

    useEffect(() => {
      if (!active) {
        document.addEventListener('mousedown', handleClick);
        document.addEventListener('touchstart', handleClick);
      }
      return () => {
        if (active) {
          document.removeEventListener('mousedown', handleClick);
          document.removeEventListener('touchstart', handleClick);
        }
      };
    });

    const handleClick = (event: any) => {
      /**
       * Check if the clicked element is contained by the top level tag provided to the
       * MouseEnter component, if not, Outside clicked! Fire onClick cb
       */
      if (!hasParent(event.target, innerRef?.current)) {
        onMouseEnter(event);
      }
    };

    /**
     * Preserve the child ref prop if exists and merge it with the one used here and the
     * proxied by the forwardRef method
     */
    const composedRefCallback = (element: ReactElement) => {
      if (typeof child.ref === 'function') {
        child.ref(element);
      } else if (child.ref) {
        child.ref.current = element;
      }
    };

    return React.cloneElement(child, {
      ref: mergeRefs([composedRefCallback, innerRef, forwardedRef]),
    });
  }
);

MouseEnter.displayName = 'MouseEnter';
export default MouseEnter;
