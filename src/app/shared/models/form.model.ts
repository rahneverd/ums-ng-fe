export class FormConfig {
  formTitle: string;
  formData: any;
  formControls: FormControls[];
  formActions?: ActionConfig[];
  rowActions?: ActionConfig[];
  pagination?: Pagination;

  constructor(params?: any) {
    params = Object.assign({}, params);
    this.formControls = [];
    this.formActions = [];
    this.rowActions = [];
    this.formTitle =
      params.formTitle === void 0 ? 'Form Title' : params.formTitle;
    this.formData = params?.formData || [];
    this.pagination = new Pagination(params.pagination);
    const formCtrls =
      params.formControls === void 0 ? [] : [...params.formControls];
    const formActs =
      params.formActions === void 0 ? [] : [...params.formActions];
    const rowActs = params.rowActions === void 0 ? [] : [...params.rowActions];
    if (formCtrls.length > 0) {
      formCtrls.forEach((ctrl: any) => {
        this.formControls.push(new FormControls(ctrl));
      });
    }
    if (formActs.length > 0) {
      formActs.forEach((e) => {
        this.formActions?.push(new ActionConfig(e));
      });
    }
    if (rowActs.length > 0) {
      rowActs.forEach((e) => {
        this.rowActions?.push(new ActionConfig(e));
      });
    }
  }
}

export class FormControls {
  fieldId: number;
  controlId: number;
  fieldLabel: string;
  controlName: string;
  nestedPath?: string;
  onChange?: boolean;
  class?: string;

  constructor(params?: any) {
    if (params === void 0) params = {};
    this.fieldId = params.fieldId;
    this.controlId = params.controlId;
    this.fieldLabel = params.fieldLabel;
    this.controlName = params.controlName;
    this.nestedPath = params.nestedPath ?? null;
    this.onChange = params.onChange === void 0 ? false : params.onChange;
    this.class = params.class || '';
  }
}

export class ActionConfig {
  actionName: string;
  actionTitle?: string;
  actionUrl?: string;
  visibleInActionMenu?: boolean;
  showToast?: boolean;
  constructor(params?: any) {
    if (params === void 0) params = {};
    this.actionName = params.actionName;
    this.actionTitle = params.actionTitle || '';
    this.actionUrl = params.actionUrl ?? null;
    this.visibleInActionMenu =
      params.visibleInActionMenu === void 0 ? true : params.visibleInActionMenu;
    this.showToast = params.showToast === void 0 ? false : params.showToast;
  }
}

export class Pagination {
  pageNo: number;
  itemsPerPage: number;
  totalCount: number;
  pagingOption: number[];

  constructor(params?: any) {
    if (params === void 0) params = {};
    this.pageNo = params?.pageNo ?? 0;
    this.itemsPerPage = params?.itemsPerPage ?? 10;
    this.totalCount = params?.totalCount ?? 0;
    this.pagingOption = params?.pagingOption ?? [10, 20, 50, 100];
  }
}
