'use client';

import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../store/counter';
import { RootState } from '../providers/StoreProvider';

export default function IndexPage() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-2xl font-bold">Counter: {count}</h1>
      <div className="flex gap-2">
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Decrease
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Increase
        </button>
      </div>
    </div>
  );
}