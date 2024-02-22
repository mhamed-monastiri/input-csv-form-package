import * as React from "react";
import { FormProvider as Form, UseFormReturn } from "react-hook-form";

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
  methods: UseFormReturn<any>;
  onSubmit?: VoidFunction;
  className?: string;
  style?: React.CSSProperties;
};

export default function FormProvider({
  children,
  onSubmit,
  methods,
  className,
  style,
}: Props) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit} className={className} style={style}>
        {children}
      </form>
    </Form>
  );
}
