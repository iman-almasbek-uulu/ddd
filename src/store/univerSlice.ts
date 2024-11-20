import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface MultiLangField {
    en: string;
    ru: string;
    ky: string;
    
}

export interface University {
    id: string,
    name: MultiLangField & {png:string};
    country: MultiLangField & { flag: string };
    location: MultiLangField;
    established: number;
    specialization: MultiLangField[];
    type: MultiLangField;
    language: MultiLangField;
    descr: {
      NominalDuration: MultiLangField;
      Awards: MultiLangField;
      TuitionFee: MultiLangField;
        ApplicationFee: MultiLangField;
        RegistrationFee: MultiLangField;
        EntryQualication: MultiLangField;
        Pre_deadline: MultiLangField;
        Application_deadline: MultiLangField;
      };
      cost: {
        title: MultiLangField;
        value_1: MultiLangField;
        value_2: MultiLangField;
      };
      photo: string[];
}

interface FilterState {
    high: MultiLangField[];
    special: MultiLangField[];
    flags: MultiLangField[];
}

interface UniverState {
    univer: University[];
    filterUniver: FilterState;
    status: "pending" | "success" | "rejected" | null;
    error: string | null;
    progress: number;
}

const initialState: UniverState = {
    univer: [],
    filterUniver: {
        high: [],
        special: [],
        flags: []
    },
    status: null,
    error: null,
    progress: 0
};

export const readUnivers = createAsyncThunk<University[], void, { rejectValue: string }>(
    "univer/readUnivers",
    async (_, { rejectWithValue, dispatch }) => {
      try {
        const response = await axios.get("https://65ed686c0ddee626c9b197ce.mockapi.io/univer", {
          onDownloadProgress: (progressEvent) => {
            const total = progressEvent.total || 0;
            const loaded = progressEvent.loaded || 0;
            const progress = Math.round((loaded / total) * 100); 
            
            console.log(`Progress: ${progress}%`);  
            
            dispatch(updateProgress(progress)); 
          },
        });
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          return rejectWithValue(error.response?.data?.message || error.message);
        } else {
          return rejectWithValue("An unexpected error occurred.");
        }
      }
    }
  );
  
const univerSlice = createSlice({
    name: "univer",
    initialState,
    reducers: {
      toggleFiltered: (state, action: PayloadAction<{ key: keyof FilterState; value: MultiLangField }>) => {
        const { key, value } = action.payload;
        const filterArray = state.filterUniver[key];
        if (filterArray.some((elem) => elem.en === value.en)) {
          state.filterUniver[key] = filterArray.filter(item => item.en !== value.en);
        } else {
          state.filterUniver[key].push(value);
        }
      },
      allFiltered: (state,action) => {
        state.filterUniver.flags = [action.payload]
      },
      updateProgress: (state, action: PayloadAction<number>) => {
        state.progress = action.payload; 
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(readUnivers.pending, (state) => {
          state.status = "pending";
          state.progress = 0; 
        })
        .addCase(readUnivers.fulfilled, (state, action) => {
          state.status = "success";
          state.univer = action.payload;
          state.progress = 100; 
        })
        .addCase(readUnivers.rejected, (state, action) => {
          state.status = "rejected";
          state.error = action.payload || null;
          state.progress = 0; 
        });
    },
  });
  
  export const { toggleFiltered, updateProgress,allFiltered } = univerSlice.actions;
  export default univerSlice.reducer;

