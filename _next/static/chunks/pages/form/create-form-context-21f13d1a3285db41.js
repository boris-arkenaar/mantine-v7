(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7605],{33507:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var r=(0,t(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},37772:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/create-form-context",function(){return t(36246)}])},36246:function(e,n,t){"use strict";t.r(n);var r=t(85893),o=t(11151),s=t(34940),a=t(61240);let i=(0,s.A)(a.us.createFormContext);function m(e){let n=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"createFormContext"})," function creates context provider and hook to get form object from context:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { createFormContext } from '@mantine/form';\nimport { TextInput } from '@mantine/core';\n\n// Definition of form values is required\ninterface FormValues {\n  age: number;\n  name: string;\n}\n\n// createFormContext returns a tuple with 3 items:\n// FormProvider is a component that sets form context\n// useFormContext hook return form object that was previously set in FormProvider\n// useForm hook works the same way as useForm exported from the package but has predefined type\nconst [FormProvider, useFormContext, useForm] = createFormContext<FormValues>();\n\nfunction ContextField() {\n  const form = useFormContext();\n  return <TextInput label=\"Your name\" {...form.getInputProps('name')} />;\n}\n\nexport function Context() {\n  // Create form as described in use-form documentation\n  const form = useForm({\n    initialValues: {\n      age: 0,\n      name: '',\n    },\n  });\n\n  // Wrap your form with FormProvider\n  return (\n    <FormProvider form={form}>\n      <form onSubmit={form.onSubmit(() => {})}>\n        <ContextField />\n      </form>\n    </FormProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"store-context-in-separate-file",children:"Store context in separate file"}),"\n",(0,r.jsx)(n.p,{children:"Usually it is a good idea to store form context in separate file to avoid dependencies cycle:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"// form-context.ts file\nimport { createFormContext } from '@mantine/form';\n\ninterface UserFormValues {\n  age: number;\n  name: string;\n}\n\n// You can give context variables any name\nexport const [UserFormProvider, useUserFormContext, useUserForm] =\n  createFormContext<UserFormValues>();\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then you can import context variables from anywhere:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"// NameInput.tsx\nimport { TextInput } from '@mantine/core';\nimport { useUserFormContext } from './form-context';\n\nexport function NameInput() {\n  const form = useUserFormContext();\n  return <TextInput label=\"Name\" {...form.getInputProps('name')} />;\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"// UserForm.tsx\nimport { NumberInput } from '@mantine/core';\nimport { UserFormProvider, useUserForm } from './form-context';\nimport { NameInput } from './NameInput';\n\nfunction UserForm() {\n  const form = useUserForm({\n    initialValues: {\n      age: 0,\n      name: '',\n    },\n  });\n\n  return (\n    <UserFormProvider form={form}>\n      <form onSubmit={form.onSubmit(() => {})}>\n        <NumberInput label=\"Age\" {...form.getInputProps('age')} />\n        <NameInput />\n      </form>\n    </UserFormProvider>\n  );\n}\n"})})]})}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(i,Object.assign({},e,{children:(0,r.jsx)(m,e)}))}}},function(e){e.O(0,[4940,9774,2888,179],function(){return e(e.s=37772)}),_N_E=e.O()}]);